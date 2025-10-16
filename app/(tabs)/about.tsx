import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis
        necessitatibus labore est facere in! Ducimus quod, repellat iusto, eius
        quam eum, exercitationem error distinctio facere voluptatem minus
        excepturi corrupti?
      </Text>
      {/* <Link href="/" style={styles.button}>Home</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
