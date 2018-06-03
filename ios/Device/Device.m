

#import <Device.h>
#import <UIKit/UIKit.h>

@implementation Device

RCT_EXPORT_MODULE();

RCT_EXPORT_MODULE(getDeviceName:(RCTResponseSenderBlock)callback) {
  @try {
    NSString *deviceName = [[UIDevice currentDevice] name];
    callback(@[[NSNull null], deviceName]);
  }
  @catch(NSException *exception) {
    callback(@[exception.reason, [NSNull null]]);
  }
}

@end
