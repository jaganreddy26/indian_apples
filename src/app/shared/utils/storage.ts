/** Storage  */
export class Storage {

    static removeSessionItem() {
        localStorage.removeItem('access-token');
    }

    static sessionClear() {
        localStorage.clear();
    }
    static clearSession(): void {
        this.sessionClear();
        this.removeSessionItem();
    }
}