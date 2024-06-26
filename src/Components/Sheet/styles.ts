import { StyleSheet, Dimensions } from "react-native"

const DIMENSIONS = Dimensions.get("window")
export const SHEET_HEIGHT = 220
export const SHEET_OVER_DRAG = 20

export const styles = StyleSheet.create({
    container: {
        width: DIMENSIONS.width,
        height: SHEET_HEIGHT,
        backgroundColor: "#1E1F23",
        position: "absolute",
        bottom: SHEET_OVER_DRAG * 1.3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    title: {
        color: "#fff",  
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: "bold",
        margin: 24
    },

    dragIcon: {
        marginTop: 16,
        alignSelf: "center"
    }
})
