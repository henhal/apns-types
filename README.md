# apns-types
Type definitions for APNS (Apple Push Notification Service)

## Description
This is a zero dependency module with only type definitions for APNS dictionaries.

If you only need the types for your APIs or similar and don't want to add a dependency to the APNS client 
implementation found in `node-apn`, this module is for you!

References:

* https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification
* https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html

## Installation

```
npm install apns-types
```

or

```
yarn add apns-types
```

## Example usage

```
import {Aps} from 'apns-types';

interface MyAppPushNotification {
  myCustomField: string;
  someOtherField?: string;
  aps: Aps;
}

const n: MyAppPushNotification = {
  myCustomField: 'Hello, world!',
  aps: {
    alert: {
      title: 'Title',
      body: 'Body'
    },
    'thread-id': '42',
    sound: 'default'
  }
};
```