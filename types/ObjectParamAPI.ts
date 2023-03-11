import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { HTTPValidationError } from '../models/HTTPValidationError';
import { LocationInner } from '../models/LocationInner';
import { Token } from '../models/Token';
import { User } from '../models/User';
import { UserCreate } from '../models/UserCreate';
import { ValidationError } from '../models/ValidationError';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateUserUsersPostRequest {
    /**
     * 
     * @type UserCreate
     * @memberof DefaultApicreateUserUsersPost
     */
    userCreate: UserCreate
}

export interface DefaultApiGetUsersUsersGetRequest {
}

export interface DefaultApiLoginForAccessTokenTokenPostRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiloginForAccessTokenTokenPost
     */
    username: string
    /**
     * 
     * @type string
     * @memberof DefaultApiloginForAccessTokenTokenPost
     */
    password: string
    /**
     * 
     * @type string
     * @memberof DefaultApiloginForAccessTokenTokenPost
     */
    grantType?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiloginForAccessTokenTokenPost
     */
    scope?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiloginForAccessTokenTokenPost
     */
    clientId?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiloginForAccessTokenTokenPost
     */
    clientSecret?: string
}

export interface DefaultApiReadUsersMeUsersMeGetRequest {
}

export interface DefaultApiRootGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new user.
     * Create User
     * @param param the request object
     */
    public createUserUsersPost(param: DefaultApiCreateUserUsersPostRequest, options?: Configuration): Promise<User> {
        return this.api.createUserUsersPost(param.userCreate,  options).toPromise();
    }

    /**
     * Get all users.
     * Get Users
     * @param param the request object
     */
    public getUsersUsersGet(param: DefaultApiGetUsersUsersGetRequest = {}, options?: Configuration): Promise<Array<User>> {
        return this.api.getUsersUsersGet( options).toPromise();
    }

    /**
     * Login For Access Token
     * @param param the request object
     */
    public loginForAccessTokenTokenPost(param: DefaultApiLoginForAccessTokenTokenPostRequest, options?: Configuration): Promise<Token> {
        return this.api.loginForAccessTokenTokenPost(param.username, param.password, param.grantType, param.scope, param.clientId, param.clientSecret,  options).toPromise();
    }

    /**
     * Read Users Me
     * @param param the request object
     */
    public readUsersMeUsersMeGet(param: DefaultApiReadUsersMeUsersMeGetRequest = {}, options?: Configuration): Promise<User> {
        return this.api.readUsersMeUsersMeGet( options).toPromise();
    }

    /**
     * Root endpoint for the FastAPI application.
     * Root
     * @param param the request object
     */
    public rootGet(param: DefaultApiRootGetRequest = {}, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.rootGet( options).toPromise();
    }

}
