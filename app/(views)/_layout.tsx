import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function ViewsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarPosition: Platform.OS === "web" ? "top" : "bottom"
            }}
        >
            <Tabs.Screen name={"profile"} options={{ title: "Mi Perfil" }} />
            <Tabs.Screen name={"shopping-cart"} options={{ title: "Carrito de compra" }} />
        </Tabs>
    );
}