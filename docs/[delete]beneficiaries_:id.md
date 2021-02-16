# [delete] /beneficiaries/:id

* [(200) must succeed on deleting the beneficiary, returning an empty body](#94c5a8fa45)
* [(500) must return a translated error when deleting an beneficiary with an invalid mongo "id"](#394631e483)

---

### :chicken: `(200) must succeed on deleting the beneficiary, returning an empty body` <a name="94c5a8fa45"></a>

```sh
curl -X DELETE \
http://localhost:50970/beneficiaries/602c23c0dcc36e97a75c9f3b \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries/602c23c0dcc36e97a75c9f3b`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |

Body: _empty_

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: _empty_

### :chicken: `(500) must return a translated error when deleting an beneficiary with an invalid mongo "id"` <a name="394631e483"></a>

```sh
curl -X DELETE \
http://localhost:50970/beneficiaries/123 \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries/123`

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
  "message": "Beneficiário \"123\" não encontrado."
}
```
