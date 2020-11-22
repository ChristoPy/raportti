# Raportti
Capture error logs from your application.


## What is is
Raportti is a small library to capture logs from your front-end

## How to install
```npm install raportti```

## Usage
```javascript
import Raportti from 'raportti';

Raportti('api.myapplication.com/logs', {
  error: true, // Get errors
  warn: true,  // Get warnings
  info: true,  // Get simple logs
});

```

## Reasons
Because sometimes logging/monitoring software are expensive or simple hard to use

## Version
0.0.3
