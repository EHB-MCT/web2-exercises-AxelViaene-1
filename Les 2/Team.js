export default class Team {
    constructor() {
        this.teamname = 'example teamname';
        this.trainer = 'example trainername';
        this.roster = []
    }
    describe() {
        return `Team ${this.teamname} with trainer ${this.trainer} has the following pokemon: ${[...this.roster]}`;
    }
}