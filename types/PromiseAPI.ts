import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { HTTPValidationError } from '../models/HTTPValidationError';
import { LocationInner } from '../models/LocationInner';
import { Token } from '../models/Token';
import { User } from '../models/User';
import { UserCreate } from '../models/UserCreate';
import { ValidationError } from '../models/ValidationError';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new user.
     * Create User
     * @param userCreate 
     */
    public createUserUsersPost(userCreate: UserCreate, _options?: Configuration): Promise<User> {
        const result = this.api.createUserUsersPost(userCreate, _options);
        return result.toPromise();
    }

    /**
     * Get all users.
     * Get Users
     */
    public getUsersUsersGet(_options?: Configuration): Promise<Array<User>> {
        const result = this.api.getUsersUsersGet(_options);
        return result.toPromise();
    }

    /**
     * Login For Access Token
     * @param username 
     * @param password 
     * @param grantType 
     * @param scope 
     * @param clientId 
     * @param clientSecret 
     */
    public loginForAccessTokenTokenPost(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: Configuration): Promise<Token> {
        const result = this.api.loginForAccessTokenTokenPost(username, password, grantType, scope, clientId, clientSecret, _options);
        return result.toPromise();
    }

    /**
     * Read Users Me
     */
    public readUsersMeUsersMeGet(_options?: Configuration): Promise<User> {
        const result = this.api.readUsersMeUsersMeGet(_options);
        return result.toPromise();
    }

    /**
     * Root endpoint for the FastAPI application.
     * Root
     */
    public rootGet(_options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.rootGet(_options);
        return result.toPromise();
    }


}



