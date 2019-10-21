import { Topic } from '../models/Topics';
import { Content } from '../models/Content';
import { promise } from 'protractor';
import { Observable, Subject } from 'rxjs';


export interface IFirebaseService
{

    GetTopicsByUsers(string) : Topic[]

    GetContentObjectsByTopic(string) : Observable<any>

    GetContentOnClick() : Subject<any>
    
}