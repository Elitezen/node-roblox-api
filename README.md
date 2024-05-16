# node-roblox-api

This library is in early development. Give it a try!

# Initial Version 0.1.0
-   Added getUser() and getUserAvatar()
-   Adding typings

# Example

```js
async function main() {
    const user = await getUser('4042612386');

    console.log(user);

    // {
    //     id: 4042612386,
    //     name: 'AMaskFromSpace',
    //     displayName: 'Elitezen',
    //     description: 'Community Developer for ScriptlyStudios',
    //     created: '2022-11-09T13:36:36.76Z',
    //     createdTimestamp: '1668000996760'
    //     isBanned: false,
    //     externalAppDisplayName: null,
    //     hasVerifiedBadge: false,
    //     avatar: {
    //       thumbnailFinal: true,
    //       thumbnailUrl: 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-0C10DA596FBD98C9D57CFF3BD1F8DE2F-Png/512/512/AvatarHeadshot/Png/noFilter',
    //       substitutionType: 0
    //     },
    // }
}

main();
```