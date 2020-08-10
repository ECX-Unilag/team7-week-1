import 'package:flutter/material.dart';
import 'shopping_cart_home.dart';

void main() {
  runApp(Shop7App());
}

class Shop7App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark(),
      debugShowCheckedModeBanner: false,
      home: ShoppingCartHome(),
    );
  }
}
