import styles from "../Themes/Styles";
import MButton from "../Components/MButton";

export function Index(props){
    return(
        <MButton
            onPress = { () => console.log("teste")}
            value = "Click me!">
        </MButton>

    )
}