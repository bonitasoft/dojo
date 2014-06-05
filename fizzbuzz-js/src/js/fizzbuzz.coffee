fizzbuzz = (number) ->
  test = (text, marker, number) ->
    if ("" + number).indexOf(marker) > 0 || number % marker is 0 then text else ""
  test("fizz", 3, number) + test("buzz", 7, number) || "" + number