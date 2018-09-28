import { Component, OnInit, Injectable } from '@angular/core';
import { Kinvey } from 'kinvey-nativescript-sdk';

@Injectable()
export class KinveyService {
  constructor() {
    Kinvey.init({
      appKey: 'kid_HkEKChktQ',
      appSecret: '9d995edeae064dff8db4ca5b438ba1f4'
    });
  }

  async getItems() {
    if (!Kinvey.User.getActiveUser()) {
      await Kinvey.User.login('admin', 'admin');
    }

    const dataStore = Kinvey.DataStore.collection('vehicles', Kinvey.DataStoreType.Network);
    return dataStore.find().toPromise();
  }
}
