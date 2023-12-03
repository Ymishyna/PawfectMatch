import React from 'react';

function Animal ({ animal }) {
    const { path, name, breed, bio } = animal;

    return (
        <div className='animal' key={name}>
            <img src={path} alt={name} className='animal-img' />
            <div className='animal-text'>
                <h3>
                    <a href={breed}>{name}</a>{' '}
                    <a href={bio}></a>
                </h3>
            </div>
        </div>
    )
}
export default Animal;
