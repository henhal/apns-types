// Types generated from specifications at https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification
// and https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html

type NumericFlag = 0 | 1;

/**
 * An APS alert dictionary
 */
export interface ApsAlert {
  /**
   * The title of the notification. Apple Watch displays this string in the short look notification interface.
   * Specify a string that’s quickly understood by the user.
   */
  title?: string
  /**
   * Additional information that explains the purpose of the notification.
   */
  subtitle?: string;
  /**
   * The content of the alert message.
   */
  body?: string;
  /**
   * The name of the launch image file to display. If the user chooses to launch your app,
   * the contents of the specified image or storyboard file are displayed instead of your app’s normal launch image.
   */
  'launch-image'?: string;
  /**
   * The key for a localized title string. Specify this key instead of the title key to retrieve the title from your
   * app’s Localizable.strings files. The value must contain the name of a key in your strings file.
   */
  'title-loc-key'?: string;
  /**
   * An array of strings containing replacement values for variables in your title string.
   * Each %@ character in the string specified by the title-loc-key is replaced by a value from this array.
   * The first item in the array replaces the first instance of the %@ character in the string,
   * the second item replaces the second instance, and so on.
   */
  'title-loc-args'?: string[];
  /**
   * The key for a localized subtitle string. Use this key, instead of the subtitle key, to retrieve the subtitle
   * from your app’s Localizable.strings file. The value must contain the name of a key in your strings file.
   */
  'subtitle-loc-key'?: string;
  /**
   * An array of strings containing replacement values for variables in your title string. Each %@ character in the
   * string specified by subtitle-loc-key is replaced by a value from this array. The first item in the array
   * replaces the first instance of the %@ character in the string, the second item replaces the second instance,
   * and so on.
   */
  'subtitle-loc-args'?: string[];
  /**
   * The key for a localized message string. Use this key, instead of the body key, to retrieve the message text
   * from your app’s Localizable.strings file. The value must contain the name of a key in your strings file.
   */
  'loc-key'?: string;
  /**
   * An array of strings containing replacement values for variables in your message text. Each %@ character in the
   * string specified by loc-key is replaced by a value from this array. The first item in the array replaces the
   * first instance of the %@ character in the string, the second item replaces the second instance, and so on.
   */
  'loc-args'?: string[];

  /**
   * @deprecated
   */
  'action-loc-key'?: string;

  /**
   * @deprecated
   */
  action?: string;
}

/**
 * An APS sound dictionary
 */
export interface ApsSound {
  /**
   * The critical alert flag. Set to 1 to enable the critical alert.
   */
  critical?: NumericFlag;
  /**
   *  The name of a sound file in your app’s main bundle or in the Library/Sounds folder of your app’s container directory.
   *  Specify the string 'default' to play the system sound.
   */
  name?: 'default' | string;
  /**
   * The volume for the critical alert’s sound. Set this to a value between 0 (silent) and 1 (full volume).
   */
  volume?: number;
}

/**
 * An APS dictionary
 */
export interface Aps {
  /**
   * The information for displaying an alert. A dictionary is recommended. If you specify a string, the alert displays
   * your string as the body text.
   */
  alert?: string | ApsAlert;
  /**
   * The number to display in a badge on your app’s icon. Specify 0 to remove the current badge, if any.
   */
  badge?: number;
  /**
   * If a string: The name of a sound file in your app’s main bundle or in the Library/Sounds folder of your app’s container
   * directory. Specify the string 'default' to play the system sound. Use this key for regular notifications.
   * For critical alerts, use the sound dictionary instead.
   */
  sound?: string | ApsSound;
  /**
   * An app-specific identifier for grouping related notifications. This value corresponds to the threadIdentifier
   * property in the UNNotificationContent object.
   */
  'thread-id'?: string;
  /**
   * The notification’s type. This string must correspond to the identifier of one of the UNNotificationCategory
   * objects you register at launch time. See Declaring your actionable notification types.
   */
  category?: string;
  /**
   * The background notification flag. To perform a silent background update, specify the value 1 and don’t
   * include the alert, badge, or sound keys in your payload.
   */
  'content-available'?: NumericFlag;
  /**
   * The notification service app extension flag. If the value is 1, the system passes the notification
   * to your notification service app extension before delivery.
   * Use your extension to modify the notification’s content. See Modifying content in newly delivered notifications.
   */
  'mutable-content'?: NumericFlag;
  /**
   * The identifier of the window brought forward. The value of this key will be populated on the
   * UNNotificationContent object created from the push payload. Access the value using the UNNotificationContent
   * object’s targetContentIdentifier property.
   */
  'target-content-id'?: string
  /**
   * The importance and delivery timing of a notification. The string values “passive”, “active”, “time-sensitive”,
   * or “critical” correspond to the UNNotificationInterruptionLevel enumeration cases.
   */
  'interruption-level'?: 'passive' | 'active' | 'time-sensitive' | 'critical';
  /**
   * The relevance score, a number between 0 and 1, that the system uses to sort the notifications from your app.
   * The highest score gets featured in the notification summary. See relevanceScore.
   * If your remote notification updates a Live Activity, you can set any Double value; for example, 25, 50, 75, or 100.
   */
  'relevance-score'?: number
  /**
   * The criteria the system evaluates to determine if it displays the notification in the current Focus.
   */
  'filter-criteria'?: string
  /**
   * The UNIX timestamp that represents the date at which a Live Activity becomes stale, or out of date.
   */
  'stale-date'?: number
  /**
   * The updated or final content for a Live Activity. The content of this dictionary must match the data you
   * describe with your custom ActivityAttributes implementation.
   */
  'content-state'?: Record<string, unknown>;
  /**
   * The UNIX timestamp that marks the time when you send the remote notification that updates or ends a Live Activity.
   */
  timestamp?: number
  /**
   * The string that describes whether you update or end an ongoing Live Activity with the remote push notification.
   */
  events?: 'update' | 'end';
}
