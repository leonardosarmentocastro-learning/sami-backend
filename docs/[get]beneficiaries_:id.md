# [get] /beneficiaries/:id

* [(200) must return the beneficiary saved on database if it exists](#010b9cb259)
* [(500) must return a translated error if the beneficiary was not found](#23489d2a97)

---

### :chicken: `(200) must return the beneficiary saved on database if it exists` <a name="010b9cb259"></a>

```sh
curl -X GET \
http://localhost:50982/beneficiaries/602c23c2683bfb97b16d6630 \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries/602c23c2683bfb97b16d6630`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |

Body: _empty_

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "STANDARD",
  "birthDate": "2021-02-16T19:57:54.321Z",
  "name": "Ronaldo",
  "cpf": "83768044645",
  "rg": "00.111.222-3",
  "createdAt": "2021-02-16T19:57:54.354Z",
  "updatedAt": "2021-02-16T19:57:54.354Z",
  "dependentsCount": 0,
  "id": "602c23c2683bfb97b16d6630"
}
```

### :chicken: `(500) must return a translated error if the beneficiary was not found` <a name="23489d2a97"></a>

```sh
curl -X GET \
http://localhost:50982/beneficiaries/602c23c2683bfb97b16d6631 \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries/602c23c2683bfb97b16d6631`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |

Body: _empty_

**Response** :hatching_chick:

Status: 500

Headers: _empty_

Body: 

```
{
  "code": "BENEFICIARIES_ERROR_USER_NOT_FOUND",
  "field": "id",
  "message": "Beneficiário \"602c23c2683bfb97b16d6631\" não encontrado."
}
```
