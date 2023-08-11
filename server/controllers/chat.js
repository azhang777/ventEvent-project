import User from "../models/User.js";
//import Chat from "../models/Chat";

//get matching users
export const matchUsers = async (req, res) => {
  try {
    /*     const partner1 = await User.findOne({ isMatching: true }).skip(
      Math.floor(Math.random() * count)
    );
    const partner2 = await User.findOne({ isMatching: true }).skip(
      Math.floor(Math.random() * count)
    );

    if (
      !partner1 ||
      !partner2 ||
      partner1.matchStatus !== "not matching" ||
      partner2.matchStatus !== "not matching"
    ) {
      res
        .status(404)
        .json({ message: "Not enough users available for matching" });
    }

    partner1.matchStatus = "matching";
    await partner1.save();
    partner2.matchStatus = "matching";
    await partner2.save();

    res.status(200).json({ partner1, partner2 }); */

    const { id } = req.params;
    const specificUser = await User.findById(id);

    if (!specificUser || specificUser.matchStatus !== "not matching") {
      return res
        .status(404)
        .json({ message: "User not available for matching" });
    }

    const count = await User.countDocuments({ isMatching: true });

    const partner = await User.findOne({
      _id: { $ne: id },
      isMatching: true,
      matchStatus: "not matching",
    }).skip(Math.floor(Math.random() * count));

    if (!partner) {
      return res
        .status(404)
        .json({ message: "No available user for matching" });
    }
    res.status(200).json({ specificUser, partner });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// this will get two random users, we want the process to be get a random user for one user that wants to match

//pool in the users who have the field isMatching = true,
//users matchStatus can be pending or matched if isMatching is true
//change when two users are matched or exit pending

/* To create a chat system where users are randomly connected with each other, you can implement a chat roulette or chat matchmaking functionality. Here's a high-level overview of how you can approach this:

1. User Registration: Users should be able to register and create an account in your system. You can have a registration form where users provide necessary information like username, email, and password.

2. User Authentication: Implement an authentication mechanism to verify the user's identity during login. This can be done using sessions, tokens (e.g., JWT), or other authentication methods.

3. Matching Algorithm: Develop a matching algorithm that randomly pairs users for chat sessions. The algorithm should consider various factors such as user availability, preferences, and any matching criteria you want to enforce (e.g., matching based on language, interests, etc.).

4. Chat Sessions: Once a user is matched with another user, create a chat session between them. This can be done by generating a unique chat room identifier or using WebSockets to establish a real-time connection between the users.

5. Real-time Communication: Implement real-time communication using WebSockets or a similar technology. This allows users to exchange messages instantly within the chat session. You can use libraries like Socket.io to handle the real-time communication layer.

6. Disconnect and Re-match: Provide an option for users to end the chat session and get re-matched with another user. This can be done through a button or some other UI element that triggers the re-matching process.

7. User Interface: Design and develop a user interface that facilitates the chat experience. Users should be able to see the chat window, send and receive messages, and have a smooth and intuitive user experience.

8. Error Handling and Security: Implement error handling mechanisms and ensure the security of the chat system. Apply necessary validations, sanitize user inputs, and handle potential security risks like cross-site scripting (XSS) or cross-site request forgery (CSRF).

Remember to thoroughly test your chat system and consider scalability aspects as more users join the platform. The above steps provide a general framework, and you can customize and expand them based on your specific requirements and technologies you are using. */
