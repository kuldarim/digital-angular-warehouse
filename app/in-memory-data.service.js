"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 10, name: "dr. Faust" },
            { id: 11, name: "Crag Hack" },
            { id: 12, name: "Victoria" },
            { id: 13, name: "Gerg" },
            { id: 14, name: "Ky kyske" },
            { id: 15, name: "Sandro" },
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map