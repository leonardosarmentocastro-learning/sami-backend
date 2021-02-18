# [get] /beneficiaries/:id

* [(200) must return the beneficiary saved on database if it exists](#010b9cb259)
* [(500) must return a translated error if the beneficiary was not found](#23489d2a97)

---

### :chicken: `(200) must return the beneficiary saved on database if it exists` <a name="010b9cb259"></a>

```sh
curl -X GET \
http://localhost:55148/beneficiaries/602ea89f95471d37ee0b46bf \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries/602ea89f95471d37ee0b46bf`

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
  "createdAt": "2021-02-18T17:49:19.514Z",
  "updatedAt": "2021-02-18T17:49:19.514Z",
  "birthDate": "2021-02-18T17:49:19.693Z",
  "name": "Ronaldo",
  "cpf": "38458581175",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602ea89f95471d37ee0b46bf"
}
```

### :chicken: `(500) must return a translated error if the beneficiary was not found` <a name="23489d2a97"></a>

```sh
curl -X GET \
http://localhost:55148/beneficiaries/602ea89f95471d37ee0b46c0 \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries/602ea89f95471d37ee0b46c0`

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
  "message": "Beneficiário \"602ea89f95471d37ee0b46c0\" não encontrado."
}
```
