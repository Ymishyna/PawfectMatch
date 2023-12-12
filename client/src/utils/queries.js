import { gql } from '@apollo/client';

export const PET_QUERY = gql`
{
    pet {
        _id
        name
        gender
        breed
        color
        age
        sterilized
        declawed
        housetrained
        location

    }
}`;