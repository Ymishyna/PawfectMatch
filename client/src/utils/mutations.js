// import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
// mutation login($email : String!, $password: String!) {
//     login(email; $email, password: $password) {
//         token
//         user {
//             _id
//             username
//         }
//     }
// }
// ;`

// export const ADD_USER = gql`
// mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(addUser: $username, email: $email, password: $password) {
//         token
//         user {
//             _id
//             username
//         }
//     }
// }
// `;

// export const SAVE_PET = gql`
// mutation savePet($petData: petData!) {
//     savePet(petData: $petData) {
//         _id
//         username
//         email
//         savedPets {
//             _id
//             name
//             breed
//             color
//             age
//             sterilized
//             declawed
//             housetrained
//             location

//         }
//     }
// }
// `;

// export const REMOVE_PET = gql`
// mutation removePet($petId: ID!) {
//     removepet(petId: $petId) {
//         _id
//         username
//         email
//         savedPet {
//             _id
//             name
//             breed
//             color
//             age
//             sterilized
//             declawed
//             housetrained
//             location
//         }
//     }
// }
// `;