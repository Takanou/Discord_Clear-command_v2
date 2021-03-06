const path = require('path');
//-----------------------------------------------------------------------------------------------------------------------------------------
//                                                  IMPORT FOLDER COMMANDS

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['clear', 'Clear'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands')
);
//                                                  IMPORT FOLDER COMMANDS END
//-----------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------
//                                                  DELETE MESSAGE COMMANDS
client.on("message", message =>{
    if (message.content.startsWith("!")) {
        message.channel.bulkDelete(1)
    };
});
//                                                  DELETE MESSAGE COMMANDS END
//-----------------------------------------------------------------------------------------------------------------------------------------
