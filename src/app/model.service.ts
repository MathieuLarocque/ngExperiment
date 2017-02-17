import { Injectable } from '@angular/core';

class Todos {
  text = [];
  set (t) {
    console.log('todos', this)
    this.text = t;
  }
}



function Store (arg) {
  function make (arg) {
    return new arg();
  }
  if (typeof arg === 'function') {
    var proto = arg.prototype;
    for (var k in proto) {
      if (proto.hasOwnProperty(k)) {
        if (typeof proto[k] === 'function') {
          make[k] = function () {
            console.log('proto', make);
            proto[k](arguments)
          }
        } else {
          make[k] = proto[k]
        }
      }
    }
    var obj = new arg();
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (typeof obj[i] === 'function') {
          this[i] = function () {
            console.log('obj', this);
            obj[k](arguments)
          }
        } else {
          this[k] = obj[k]
        }
      }
    }
  }
}

@Injectable()
export class ModelService {
  val = 5;
  // todos = new Store(Todos);
  constructor() {
    // console.log(this.todos);
  }

  set(s) {
    this.val = s;
  }

}
