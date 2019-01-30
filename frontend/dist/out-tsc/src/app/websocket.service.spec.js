import { TestBed } from '@angular/core/testing';
import { WebsocketService } from './websocket.service';
describe('WebsocketService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(WebsocketService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=websocket.service.spec.js.map