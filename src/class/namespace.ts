export {};

//namespaceは同じ名前のクラスでも格納できる。
//外側からのアクセセスに対して、exportをつける。
//
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(public first: string, public last: string) {}
  }
}

const me = new Japanese.Tokyo.Person("dai");
const sa = new Japanese.Osaka.Person("aho");
console.log(me.name);
console.log(sa.name)