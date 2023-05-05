import { Injectable } from "@angular/core";
@Injectable()
export class CustomDataService {
    getAuthToken = () => "auth-token-from-custom-data-service";
    getClientCode = () => "client-code-from-custom-data-service";
}