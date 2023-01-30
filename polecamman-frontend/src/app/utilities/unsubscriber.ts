import {Subscription} from "rxjs";
import {Injectable, OnDestroy} from "@angular/core";

@Injectable()
export class Unsubscriber implements OnDestroy {
  private subscriptions: Subscription = new Subscription();

  public ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  protected resetSubscriptions() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  public addSubscription(subscription: Subscription) {
    this.subscriptions.add(subscription);
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.add(subscription);
  }
}
