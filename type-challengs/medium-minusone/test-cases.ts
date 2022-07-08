type MinusOne<T extends number, Tem extends any[] = []> = [
  ...Tem,
  ""
]["length"] extends T 
? Tem["length"]
: MinusOne<T,[...Tem,""]>



