import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';
import Header from './Header';
import ChatLabel from './ChatLabel';
import MessageContainer from './MessageContainer';
import TextInputField from './TextInputField';
import {
    isValidEmail,
    isValidBirthDate,
    isValidPassword,
} from '../validations/validators';
import {
    apiURL,
    HOST_NAME,
    HOST,
    CUSTOMER,
    DEFAULT_ERROR,
    INVALID_BIRTH_DATE,
    INVALID_EMAIL,
    INVALID_PASSWORD,
} from '../constants';


const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

class ChatBot extends React.Component {
    state = {
        steps: [],
        responses: [
            {
                userType: HOST,
                text:
                    "Thanks for visiting Cerebral! I will be taking you through a short list of questions so we can better understand how to help you out. So let's begin!",
            },
        ],
        text: '',
        currentQuestion: '',
        questionID: 1,
        currentObj: {},
    };

    componentDidMount() {
        axios
            .get(apiURL)
            .then((res) => {
                const steps = res.data;
                const currentObj = steps[this.state.questionID];
                const currentQuestion = currentObj.question;

                this.setState({
                    steps,
                    currentQuestion,
                    responses: [
                        ...this.state.responses,
                        { userType: HOST, text: currentQuestion },
                    ],
                    currentObj,
                });
            })
            .catch((err) => console.error(err));
    }

    handleTextInput = (text) => {
        this.setState({
            text,
        });
    };

    handleOnPress = async () => {
        const {
            questionID,
            text,
            currentObj,
            currentQuestion,
            responses,
            steps,
        } = this.state;
        const { paths, validation } = currentObj;
        let nextID = null;

        //if validation is boolean
        if (typeof validation === 'boolean') {
            if (validation) {
                nextID = currentObj.paths;
            } else {
                return null;
            }
        }

        //if validation is array
        if (Array.isArray(validation)) {
            if (validation.length === 2) {
                if (text.toLowerCase() === 'yes') {
                    nextID = paths.yes;
                } else if (text.toLowerCase() === 'no') {
                    nextID = paths.no;
                } else {
                    this.setState({
                        responses: [
                            ...responses,
                            { userType: CUSTOMER, text },
                            { userType: HOST, text: DEFAULT_ERROR },
                            { userType: HOST, text: currentQuestion },
                        ],
                        text: '',
                    });
                    return;
                }
            } else {
                nextID = paths;
            }
        }

        //if validation is string, call validate methods such as isValidEmail(text, validation)
        if (typeof validation === 'string') {
            if (questionID === 3) {
                if (isValidEmail(text, validation)) {
                    nextID = paths;
                } else {
                    this.setState({
                        responses: [
                            ...responses,
                            { userType: CUSTOMER, text },
                            { userType: HOST, text: INVALID_EMAIL },
                            { userType: HOST, text: currentQuestion },
                        ],
                        text: '',
                    });
                    return;
                }
            } else if (questionID === 5) {
                if (isValidPassword(text, validation)) {
                    nextID = paths;
                } else {
                    this.setState({
                        responses: [
                            ...responses,
                            { userType: CUSTOMER, text },
                            { userType: HOST, text: INVALID_PASSWORD },
                            { userType: HOST, text: currentQuestion },
                        ],
                        text: '',
                    });
                    return;
                }
            } else {
                if (isValidBirthDate(text, validation)) {
                    nextID = paths;
                } else {
                    this.setState({
                        responses: [
                            ...responses,
                            { userType: CUSTOMER, text },
                            { userType: HOST, text: INVALID_BIRTH_DATE },
                            { userType: HOST, text: currentQuestion },
                        ],
                        text: '',
                    });
                    return;
                }
            }
        }
        const newObj = steps.find((step) => step.id === nextID);
        const newQuestion = newObj.question;
        this.setState({
            responses: [...responses, { userType: CUSTOMER, text }],
            questionID: nextID,
            currentQuestion: newQuestion,
            currentObj: newObj,
            text: '',
        });
        await sleep(500);
        this.setState({
            responses: [...this.state.responses, { userType: HOST, text: newQuestion }],
        });
    };

    handleOnChange = (text) => {
        this.setState({
            text,
        });
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <ChatLabel hostName={HOST_NAME} />
                <MessageContainer
                    steps={this.state.steps}
                    responses={this.state.responses}
                    hostName={HOST_NAME}
                />

                <TextInputField
                    handleOnChange={this.handleOnChange}
                    handleOnPress={this.handleOnPress}
                    text={this.state.text}
                    questionID={this.state.questionID}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf4f6',
    },
    sendText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default ChatBot;
