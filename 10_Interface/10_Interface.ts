// (10) 문법 - 인터페이스와 타입 별칭 ( 정의하기 )

// 1) 인터페이스
export interface IUser {
    readonly id : number;
    readonly name : Name;
    email: string;
    receiveInfo: boolean;
    active : YesOrNo; 
}

export interface IUser{
    address?: string;
}

export interface Color {
    fontColor: string;
    strokeColor: string;
    borderColor: string;
    backgroundColor : string;
}

export interface IUserProfile extends IUser{
    profileImage: string;
    github?: string;
    twitter?: string;
}

export interface IStyle extends Color, Display, Geometry{
    tagName : string;
}

export interface IOnlyNumberValueObject  {
    [key:string]:number;
}

export interface IGetApi {
    (url:string, search?: string): Promise<string>
}

export interface IRect {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface IRectConstruct {
    new (x: number, y: number, width:number, height:number): IRect;
}


// 2) 타입 별칭 ( 타입 알리아스 )
export type YesOrNo = 'Y' | 'N';  
export type DayOfWeek = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export type Name = string;
export type Email = string;
export type FooFunction = () => string;

export type TUser = {
    readonly id : number;
    readonly name : string;
    email: Email;
    receiveInfo : boolean;
    active : YesOrNo;
}

// export type TUser = {
//     address?: string;
// }

export type TUserProfile = IUser & {
    profileImage: string;
    github?: string;
    twitter?: string;
}

export type Display = {
    display: 'none' | 'block';
    visibility: boolean;
    opacity : number;
}

export type Geometry = {
    width:number;
    height:number;
    padding:number;
    margin:number;
}

export type TStyle = Color & Display & Geometry & {
    tagName : string;
}

export type TOnlyBooleanValueObject = {
    [prop:string]: boolean;
}

export type TGetApi = {
    (url:string, search?: string): Promise<string>
}


// 3) enum 타입 ( )
export enum DayOfTheWeek {'월', '화', '수', '목', '금', '토','일'};
