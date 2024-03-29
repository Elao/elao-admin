# Choices dropdown

## Installation

Require tom-select in your project:

```shell
npm i tom-select
```

Include tom-select template in your `app.scss`:

```scss
@import "~tom-select/src/scss/tom-select";  // Must be imported before "@elao-admin"
@import '@elao/admin';

```

Àctivate choice plugin in your `app.js` by passing the TomSelect library:

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

### Options

You can override the default options of TomSelect using the attribute `data-choice-options` fill with a json object

In HTML:

```html
<select data-choice data-choice-options="{&quot;maxOptions&quot;:null}">
    <!-- Options... -->
</select>
```

Or in Symfony:

```php
->add('country', CountryType::class, [
    'choices'  => $roles,
    'attr' => [
        'data-choice' => true,
        'data-choice-options' => json_encode(['maxOptions' => null])
    ],
])
```
