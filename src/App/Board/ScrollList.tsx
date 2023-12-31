import { BoardPostMockup } from "../../types/Board";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ({ post }: { post: BoardPostMockup }): JSX.Element {
  switch (post.board) {
    default:
      return ScrollList(post);
  }
}

function ScrollList(post: BoardPostMockup): JSX.Element {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.hBody}>
        <Text style={styles.title}>{post.title} </Text>
        <Text style={styles.comment}>{post.content}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.userName}>{post.userName}</Text>
        <Text style={styles.created}>{post.created}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minWidth: 200,
    minHeight: 150,
    padding: 10,
  },
  hBody: {
    flex: 2,
  },
  title: {
    fontSize: 20,
    maxWidth: 200,
  },
  comment: {
    fontSize: 15,
    marginVertical: 10,
    paddingBottom: 10,
    marginRight: "50%",
  },
  bottom: {
    flex: 1,
    paddingTop: "10%",
    fontSize: 10,
    flexDirection: "row",
  },
  userName: {
    flex: 1,
    justifyContent: "flex-start",
    fontSize: 10,
    color: "gray",
  },
  created: {
    justifyContent: "flex-end",
    fontSize: 10,
  },
});
