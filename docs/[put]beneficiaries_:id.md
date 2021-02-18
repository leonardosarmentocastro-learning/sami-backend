# [put] /beneficiaries/:id

* [(200) 0. must succeed on updating the field "plan" and always return the full updated document](#1ce4931bb0)
* [(200) 1. must succeed on updating the field "plan" and always return the full updated document](#17331d4a6f)
* [(200) 2. must succeed on updating the field "plan" and always return the full updated document](#b348551937)
* [(200) 3. must succeed on updating the field "dependents" and always return the full updated document](#435b7c3d53)
* [(200) 4. must succeed on updating the field "birthDate" and always return the full updated document](#87debe31c3)
* [(200) 5. must succeed on updating the field "cpf" and always return the full updated document](#42f1e34d3c)
* [(200) 6. must succeed on updating the field "name" and always return the full updated document](#9165655a1b)
* [(200) 7. must succeed on updating the field "rg" and always return the full updated document](#f7d3a8a55f)
* [(500) must return a translated error if the beneficiary was not found](#23489d2a97)

---

### :chicken: `(200) 0. must succeed on updating the field "plan" and always return the full updated document` <a name="1ce4931bb0"></a>

```sh
curl -X PUT \
http://localhost:53062/beneficiaries/602e8bd4e17fef1b4068dc1d \
-d '{
  "plan": "BASIC"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602e8bd4e17fef1b4068dc1d`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "plan": "BASIC"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "BASIC",
  "createdAt": "2021-02-18T15:46:28.191Z",
  "updatedAt": "2021-02-18T15:46:28.380Z",
  "birthDate": "2021-02-18T15:46:28.316Z",
  "name": "Ronaldo",
  "cpf": "88886018649",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602e8bd4e17fef1b4068dc1d"
}
```

### :chicken: `(200) 1. must succeed on updating the field "plan" and always return the full updated document` <a name="17331d4a6f"></a>

```sh
curl -X PUT \
http://localhost:53062/beneficiaries/602e8bd4e17fef1b4068dc1e \
-d '{
  "plan": "PREMIUM"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602e8bd4e17fef1b4068dc1e`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "plan": "PREMIUM"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "PREMIUM",
  "createdAt": "2021-02-18T15:46:28.191Z",
  "updatedAt": "2021-02-18T15:46:28.422Z",
  "birthDate": "2021-02-18T15:46:28.403Z",
  "name": "Ronaldo",
  "cpf": "08823102405",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602e8bd4e17fef1b4068dc1e"
}
```

### :chicken: `(200) 2. must succeed on updating the field "plan" and always return the full updated document` <a name="b348551937"></a>

```sh
curl -X PUT \
http://localhost:53062/beneficiaries/602e8bd4e17fef1b4068dc1f \
-d '{
  "plan": "STANDARD"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602e8bd4e17fef1b4068dc1f`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "plan": "STANDARD"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "STANDARD",
  "createdAt": "2021-02-18T15:46:28.191Z",
  "updatedAt": "2021-02-18T15:46:28.463Z",
  "birthDate": "2021-02-18T15:46:28.431Z",
  "name": "Ronaldo",
  "cpf": "34566366367",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602e8bd4e17fef1b4068dc1f"
}
```

### :chicken: `(200) 3. must succeed on updating the field "dependents" and always return the full updated document` <a name="435b7c3d53"></a>

```sh
curl -X PUT \
http://localhost:53062/beneficiaries/602e8bd4e17fef1b4068dc20 \
-d '{
  "dependents": [
    "602e8bd4e17fef1b4068dc1c"
  ]
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602e8bd4e17fef1b4068dc20`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "dependents": [
    "602e8bd4e17fef1b4068dc1c"
  ]
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [
    "602e8bd4e17fef1b4068dc1c"
  ],
  "plan": "STANDARD",
  "createdAt": "2021-02-18T15:46:28.191Z",
  "updatedAt": "2021-02-18T15:46:28.500Z",
  "birthDate": "2021-02-18T15:46:28.473Z",
  "name": "Ronaldo",
  "cpf": "34146452546",
  "rg": "00.111.222-3",
  "dependentsCount": 1,
  "id": "602e8bd4e17fef1b4068dc20"
}
```

### :chicken: `(200) 4. must succeed on updating the field "birthDate" and always return the full updated document` <a name="87debe31c3"></a>

```sh
curl -X PUT \
http://localhost:53062/beneficiaries/602e8bd4e17fef1b4068dc21 \
-d '{
  "birthDate": "2021-02-18T15:46:28.246Z"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602e8bd4e17fef1b4068dc21`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "birthDate": "2021-02-18T15:46:28.246Z"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "STANDARD",
  "createdAt": "2021-02-18T15:46:28.191Z",
  "updatedAt": "2021-02-18T15:46:28.535Z",
  "birthDate": "2021-02-18T15:46:28.246Z",
  "name": "Ronaldo",
  "cpf": "55320557183",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602e8bd4e17fef1b4068dc21"
}
```

### :chicken: `(200) 5. must succeed on updating the field "cpf" and always return the full updated document` <a name="42f1e34d3c"></a>

```sh
curl -X PUT \
http://localhost:53062/beneficiaries/602e8bd4e17fef1b4068dc22 \
-d '{
  "cpf": "20851854605"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602e8bd4e17fef1b4068dc22`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "cpf": "20851854605"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "STANDARD",
  "createdAt": "2021-02-18T15:46:28.191Z",
  "updatedAt": "2021-02-18T15:46:28.566Z",
  "birthDate": "2021-02-18T15:46:28.543Z",
  "name": "Ronaldo",
  "cpf": "20851854605",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602e8bd4e17fef1b4068dc22"
}
```

### :chicken: `(200) 6. must succeed on updating the field "name" and always return the full updated document` <a name="9165655a1b"></a>

```sh
curl -X PUT \
http://localhost:53062/beneficiaries/602e8bd4e17fef1b4068dc23 \
-d '{
  "name": "João da Silva"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602e8bd4e17fef1b4068dc23`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "name": "João da Silva"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "STANDARD",
  "createdAt": "2021-02-18T15:46:28.191Z",
  "updatedAt": "2021-02-18T15:46:28.594Z",
  "birthDate": "2021-02-18T15:46:28.574Z",
  "name": "João da Silva",
  "cpf": "74736356898",
  "rg": "00.111.222-3",
  "dependentsCount": 0,
  "id": "602e8bd4e17fef1b4068dc23"
}
```

### :chicken: `(200) 7. must succeed on updating the field "rg" and always return the full updated document` <a name="f7d3a8a55f"></a>

```sh
curl -X PUT \
http://localhost:53062/beneficiaries/602e8bd4e17fef1b4068dc24 \
-d '{
  "rg": "01-123-321-0"
}' \
-H 'accept-language: pt-br'
-H 'content-type: application/json'
```

**Request** :egg:

Path: `/beneficiaries/602e8bd4e17fef1b4068dc24`

Query parameters: _empty_

Headers: 

| Key | Value |
| :--- | :--- |
| accept-language | pt-br |
| content-type | application/json |

Body: 

```
{
  "rg": "01-123-321-0"
}
```

**Response** :hatching_chick:

Status: 200

Headers: _empty_

Body: 

```
{
  "dependents": [],
  "plan": "STANDARD",
  "createdAt": "2021-02-18T15:46:28.191Z",
  "updatedAt": "2021-02-18T15:46:28.628Z",
  "birthDate": "2021-02-18T15:46:28.605Z",
  "name": "Ronaldo",
  "cpf": "17775183004",
  "rg": "01-123-321-0",
  "dependentsCount": 0,
  "id": "602e8bd4e17fef1b4068dc24"
}
```

### :chicken: `(500) must return a translated error if the beneficiary was not found` <a name="23489d2a97"></a>

```sh
curl -X PUT \
http://localhost:53062/beneficiaries/602e8bd4e17fef1b4068dc26 \
-H 'accept-language: pt-br'
```

**Request** :egg:

Path: `/beneficiaries/602e8bd4e17fef1b4068dc26`

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
  "message": "Beneficiário \"602e8bd4e17fef1b4068dc26\" não encontrado."
}
```
