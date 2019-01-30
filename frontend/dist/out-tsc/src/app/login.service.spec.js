import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
describe('LoginService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LoginService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=login.service.spec.js.map