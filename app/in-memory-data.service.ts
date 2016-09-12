import {InMemoryDbService} from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService
{
    createDb()
    {
        let heroes =
        [
            { id: 10, name: "dr. Faust" },
            { id: 11, name: "Crag Hack" },
            { id: 12, name: "Victoria" },
            { id: 13, name: "Gerg" },
            { id: 14, name: "Ky kyske" },
            { id: 15, name: "Sandro" },
        ];
        return {heroes};
    }
}