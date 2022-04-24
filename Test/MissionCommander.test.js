const MissionCommander = require('./../MissionComander');

describe("Unit Test for Mission Commander Class", ()=>{
    test('1) Create a mission commander object', () => {
        const  myMissionCommander = new MissionCommander("Alexis")

        expect(myMissionCommander.name).toBe("Alexis");
    });
})