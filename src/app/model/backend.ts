export class Backend {
    backendDomain: string = 'https://doncinema.herokuapp.com'

    async getTypeAttributes(type: string, populate: string): Promise<any> {
        const url = `${this.backendDomain}/api/${type}?populate=${populate}`;
        const response = await fetch(url);
        const apiAnswer = await response.json();

        return apiAnswer.data.attributes;
    }
    
    getIdArray(type:any, relation:string):number[] {
        return (type[relation].data.map((obj: { id: any; }) => obj.id));
    }

    async getTypeAttributesById(type:string, id:number, populate: string):Promise<any>{
        const url = `${this.backendDomain}/api/${type}/${id}?populate=${populate}`;
        const response = await fetch(url);
        const apiAnswer = await response.json();
        
        return apiAnswer.data.attributes;
    }
}
