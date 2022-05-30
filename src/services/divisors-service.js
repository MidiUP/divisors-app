import { divisorsApi } from './divisors-api'

class DivisorsService {

    async getDivisorsAndPrimes(number) {
        return (await divisorsApi.get(`api/classify-numbers/${number}`)).data
    }
}

export default new DivisorsService()