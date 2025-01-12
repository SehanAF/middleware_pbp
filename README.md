# Enumerated Types in Dart

## Apa itu Enumerated Types?
Enumerated Types, atau sering disebut Enumerations atau Enums, adalah cara untuk menyimpan banyak nilai konstan di satu tempat. Dengan Enums, kita dapat membuat kode lebih jelas dan mudah dibaca.

### Contoh Penggunaan Dasar
Berikut adalah contoh mendefinisikan dan menggunakan Enums di Dart:

```dart
enum Rainbow {
  red, orange, yellow, green, blue, indigo, violet
}

enum Weather {
  sunny, cloudy, rain, storm
}
```

Enums pada Dart memiliki beberapa properti bawaan yang dapat digunakan untuk:
- Menampilkan seluruh nilai dalam bentuk list.
- Menampilkan item dan indeks dari item tersebut.

### Contoh Kode
```dart
void main() {
  print(Rainbow.values); // Menampilkan semua nilai dalam enum Rainbow
  print(Rainbow.blue);   // Mengakses nilai tertentu dari enum
  print(Rainbow.orange.index); // Mendapatkan indeks dari nilai tertentu
}

enum Rainbow { red, orange, yellow, green, blue, indigo, violet }
```

Ketika kode di atas dijalankan, output di konsol akan seperti berikut:

```
[Rainbow.red, Rainbow.orange, Rainbow.yellow, Rainbow.green, Rainbow.blue, Rainbow.indigo, Rainbow.violet]
Rainbow.blue
1
```

## Properti `.name` di Dart 2.15
Sejak Dart versi 2.15, Enums memiliki properti baru `.name` untuk menampilkan nilai string dari setiap item.

### Contoh Penggunaan `.name`
```dart
print(Rainbow.blue.name);   // Output: blue
```

## Enums dalam Switch Statements
Kita juga dapat menggunakan Enums dalam switch statements. Namun, kita harus menangani semua kemungkinan nilai Enums yang ada.

### Contoh Kode
```dart
void main() {
  var weatherForecast = Weather.cloudy;

  switch (weatherForecast) {
    case Weather.sunny:
      print("Today's weather forecast is sunny");
      break;
    case Weather.cloudy:
      print("Today's weather forecast is cloudy");
      break;
    case Weather.rain:
      print("Today's weather forecast is rain");
      break;
    case Weather.storm:
      print("Today's weather forecast is storm");
      break;
  }
}

enum Weather { sunny, cloudy, rain, storm }
```

Output dari kode di atas adalah:

```
Today's weather forecast is cloudy
```

## Fitur Baru di Dart 2.17: Enums dengan Attributes dan Behaviors
Sejak Dart versi 2.17, Enums memiliki fitur seperti kelas yang memungkinkan kita menambahkan atribut dan konstruktor di dalam Enums.

### Contoh Kode
```dart
enum Weather {
  sunny(15),
  cloudy(34),
  rain(69),
  storm(83);

  final int rainAmount;

  const Weather(this.rainAmount);
}

void main() {
  print(Weather.rain.rainAmount); // Output: 69
}
```

## Override Method `toString()`
Kita juga dapat melakukan override pada metode `toString()` untuk mengonversi nilai Enums menjadi teks yang lebih informatif.

### Contoh Kode
```dart
enum Weather {
  sunny(15),
  cloudy(34),
  rain(69),
  storm(83);

  final int rainAmount;

  const Weather(this.rainAmount);

  @override
  String toString() =>
      "Today's weather forecast is $name with a $rainAmount% chance of rain";
}

void main() {
  var weatherForecast = Weather.cloudy;
  print(weatherForecast);
}
```

Output dari kode di atas adalah:

```
Today's weather forecast is cloudy with a 34% chance of rain
```

## Kesimpulan
Dengan menggunakan Enums, kita dapat membuat kode lebih terstruktur dan mudah dibaca. Fitur tambahan di Dart versi terbaru membuat Enums semakin fleksibel dan berguna untuk berbagai skenario pemrograman.

