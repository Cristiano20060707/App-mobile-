import { TouchableOpacity,Text } from "react-native";
import { styles } from "./styles";


type Props = {
    title : string;
}

export function Button({ title }: Props){
    return(
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.TextButton}>{title}</Text>
        </TouchableOpacity>
    )
}