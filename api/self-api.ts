import { IFoundItem } from "@web/app/types/globals";

interface ISelfSearch {
    db: string;
    field: string;
    find: string;
}

const resources: { frutas: IFoundItem[] } = {
    "frutas": [
        {
            "id": 1,
            "title": "morango",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 2,
            "title": "maca",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 3,
            "title": "banana",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 4,
            "title": "pera",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 5,
            "title": "ameixa",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 6,
            "title": "pessego",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 7,
            "title": "amora",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 8,
            "title": "melancia",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 9,
            "title": "melao",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 10,
            "title": "pitaya",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 11,
            "title": "uva",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 12,
            "title": "abacaxi",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 13,
            "title": "mamao",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 14,
            "title": "kiwi",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        },
        {
            "id": 15,
            "title": "graviola",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        }
    ]
};

class SelfApi {
    constructor() {
    }

    protected filter(field: string | number, value: string): boolean {
        return field === value;
    }
    
    protected filterLike(field: string | number, rx: RegExp): boolean {
        return rx.test(<string>field);
    }
        
    protected processRequest(search: ISelfSearch): IFoundItem[] {
        const collection: IFoundItem[] = resources[ <'frutas'>search.db ];

        const query: {
            field: string;
            value: string | RegExp;
        } = { field: '', value: '' };

        query.field = search.field;
        query.value = search.find;

        if (search.field.indexOf('_like') > -1) {
            query.field = search.field.split('_')[0];
            query.value = new RegExp( search.find,'i');
        }

        
        return collection
            .filter( (item: IFoundItem): boolean => {
                const fieldValue: string | number = (<any>item)[query.field];

                return this.filter(fieldValue, <string>query.value) ||
                    this.filterLike(fieldValue, <RegExp>query.value);
            });        
    }

    public fetchItems(search: ISelfSearch): IFoundItem[] {
        return this.processRequest(search);
    }
}

export const selfApi = new SelfApi();
