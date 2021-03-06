import {HttpClient, HttpResponse} from '@angular/common/http';
import {IBasicProfile} from '../basic-profile/basic-profile.model';
import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../../../app.constant';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {createRequestOption} from '../../../../util/request-util';
import {IPaymentRequest, ITransaction, ITransactionRead} from './transanction.model';

type EntityResponseType = HttpResponse<ITransaction>;
type EntityResponseTyped = HttpResponse<ITransactionRead>;
type EntityResponseTypePay = HttpResponse<string>;
type EntityArrayResponseType = HttpResponse<ITransaction[]>;

@Injectable({ providedIn: 'root' })
export class TransactionService {
    public resourceUrl = SERVER_API_URL + 'finance/tnx/';
    public resourceUrl2 = SERVER_API_URL + 'finance/paymentintent/';

    constructor(protected http: HttpClient) {}

    create(notification: ITransaction): Observable<EntityResponseType> {
        return this.http
            .post<ITransaction>(this.resourceUrl, notification, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    createIntent(payRequest: IPaymentRequest): Observable<EntityResponseTypePay> {
        return  this.http
            .post<string>(this.resourceUrl2, payRequest, {observe: 'response'})
            .pipe(map((res: EntityResponseTypePay) => this.convertPayFromServer(res)));
    }

    update(notification: ITransaction, id: number): Observable<EntityResponseType> {
        return this.http
            .patch<ITransaction>(`${this.resourceUrl}${id}/`, notification, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseTyped> {
        return this.http
            .get<ITransactionRead>(`${this.resourceUrl}${id}/`, { observe: 'response' })
            .pipe(map((res: EntityResponseTyped) => res));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<ITransaction[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<{}>> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    findByUserId(id: string): Observable<EntityArrayResponseType> {
        return this.http
            .get<ITransaction[]>(`${this.resourceUrl}byuser/${id}/my`, { observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    findByStatus(status: string, user: string): Observable<EntityArrayResponseType> {
        return this.http
            .get<ITransaction[]>(`${this.resourceUrl}${status}/${user}/`, {  observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    findByOnlyStatus(status: string): Observable<EntityArrayResponseType> {
        return this.http
            .get<ITransaction[]>(`${this.resourceUrl}${status}/`, {  observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        return res;
    }
    protected convertPayFromServer(res: EntityResponseTypePay): EntityResponseTypePay {
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        return res;
    }
}

