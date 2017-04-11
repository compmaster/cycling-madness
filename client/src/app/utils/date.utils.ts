export class DateUtils {
	static getAge(bornDate: Date): any {
		if(bornDate instanceof Date) {
			var ageDiff = Date.now() - bornDate.getTime();
			return Math.round(ageDiff / 1000 / 60 / 60 / 24 / 30 / 12);
		}
	}
}