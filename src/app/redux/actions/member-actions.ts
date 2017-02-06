import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {RootState} from '../store';
import {Member} from "../../models/member";
import {Board} from "../../models/board";

@Injectable()
export class MemberActions {
  constructor(private ngRedux: NgRedux<RootState>) {
  }

  static SET_MEMBER: string = 'SET_MEMBER';
  static RESET_MEMBER_STORE: string = 'RESET_MEMBER_STORE';
  static UPDATE_PULLED_AT: string = 'UPDATE_PULLED_AT';


  public resetStore() {
    this.ngRedux.dispatch({type: MemberActions.RESET_MEMBER_STORE})
  }


  public rebuildStorePartially(members: Member[], board: Board, time: Date) {
    members.map(
      member => this.ngRedux.dispatch({type: MemberActions.SET_MEMBER, payload: member})
    );
  }
}
