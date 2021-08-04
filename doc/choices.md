# Choices dropdown

## Installation

In your app.js:

```javascript
import TomSelect from 'tom-select';
import { Choice } from '@elao/admin';

Choice.init(TomSelect);
```

## Usage

Set the `data-choice` attribute on the select elements you want to activate:

In HTML:

```html
<select data-choice>
    <!-- Options... -->
</select>
```

Or in Symfony:

```php
->add('role', ChoiceType::class, [
    'choices'  => $roles,
    'attr' => [
        'data-choice' => true
    ],
])
```
