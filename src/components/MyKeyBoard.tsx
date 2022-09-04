import * as React from "react";
import { View, Text } from "react-native";
import { myColors } from "../styles/Color";
import { Styles } from "../styles/GlobalStyles";
import Button from "./Button";

export default function MyKeyboard() {
    const [fisrtNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<Number | null>(null);

    const handleNumberPress = (buttonValue: string) => {
        if (fisrtNumber.length < 10) {
            setFirstNumber(fisrtNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(fisrtNumber);
        setFirstNumber("");
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);

    }

    const getResult = () => {
        switch (operation) {
            case "+":
                clear();
                setResult(parseFloat(fisrtNumber) + parseFloat(secondNumber));
                break;
            case "-":
                clear();
                setResult(parseFloat(fisrtNumber) - parseFloat(secondNumber));
                break;
            case "*":
                clear();
                setResult(parseFloat(fisrtNumber) * parseFloat(secondNumber));
                break;
            case "/":
                clear();
                setResult(parseFloat(fisrtNumber) / parseFloat(secondNumber));
                break;
                defualt:
                clear();
                setResult(0);
                break;



        }
    }

    const fisrtNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999
                ? [Styles.screenFirstNumber, { color: myColors.result }]
                : [Styles.screenFirstNumber, { fontSize: 50, color: myColors.result }]}
            >{result?.toString()}</Text>
        }

        if (fisrtNumber && fisrtNumber.length < 6) {
            return <Text style={Styles.screenFirstNumber}>
                {fisrtNumber}
            </Text>
        }

        if (fisrtNumber === "") {
            return <Text style={Styles.screenFirstNumber}>
                {"0"}
            </Text>
        }
        if (fisrtNumber.length > 5 && fisrtNumber.length < 8) {
            return <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                {fisrtNumber}
            </Text>
        }

        if (fisrtNumber.length > 7) {
            return <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
                {fisrtNumber}
            </Text>
        }


    }

    return (
        <View style={Styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center"
                }}
            >
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}

                    <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
                </Text>
                {fisrtNumberDisplay()}


            </View>
            <View style={Styles.row}>
                <Button title="C" isGray onPress={clear} />
                <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                <Button title="%" isGray onPress={() => handleOperationPress("%")} />
                <Button title="/" isBlue onPress={() => handleOperationPress("/")} />
            </View>

            <View style={Styles.row}>
                <Button title="7" onPress={() => handleNumberPress("7")} />
                <Button title="8" onPress={() => handleNumberPress("8")} />
                <Button title="9" onPress={() => handleNumberPress("9")} />
                <Button title="x" isBlue onPress={() => handleOperationPress("*")} />
            </View>

            <View style={Styles.row}>
                <Button title="4" onPress={() => handleNumberPress("4")} />
                <Button title="5" onPress={() => handleNumberPress("5")} />
                <Button title="6" onPress={() => handleNumberPress("6")} />
                <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>

            <View style={Styles.row}>
                <Button title="1" onPress={() => handleNumberPress("1")} />
                <Button title="2" onPress={() => handleNumberPress("2")} />
                <Button title="3" onPress={() => handleNumberPress("3")} />
                <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>

            <View style={Styles.row}>
                <Button title="." onPress={() => handleNumberPress(".")} />
                <Button title="0" onPress={() => handleNumberPress("0")} />
                <Button title="◄" onPress={() => setFirstNumber(fisrtNumber.slice(0, -1))} />
                <Button title="=" isBlue onPress={() => getResult()} />
            </View>

        </View>
    );
}