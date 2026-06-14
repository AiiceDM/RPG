import React from 'react';

// ATENÇÃO: As imagens abaixo são URLs temporárias do Notion (expiram em ~1h).
// Substitua por URLs permanentes (imgur, cloudinary, etc.) para uso contínuo.
const DIVINDADES = [
  {
    slug: 'all-mer',
    nome: 'All-mer',
    titulo: 'A Abundância',
    tags: ['Cura', 'Compaixão', 'Esperança'],
    alinhamento: 'Neutro e Bom',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/d35327aa-1e21-4de7-abad-5544ec376c4c/all-mer.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YCBU5H%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdR72HwL2iq0IaryTLu4DC%2FI6q7e8UZb%2FCczVM7pwEsAiEAgaKEaqR6H1vwtplihOhlZnQ8VYqvprepOFmWyT7lX7gq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHF5YHmcYLISr4W%2BGyrcA%2FMhScmOTNxmwA5Rd3LzZMwpdeoMobl3eF%2F%2FEGbBpUYMdZKQZdm4lKaux1R04tCOkxEtZcTCGhDYoCvQAzpkcOf33ckU%2F1tJC9NrJXwKijD61Kq%2BOGto4yP5oS7EZY%2FgvzSnhqAKi7pAtycaVzP1mRiAwqY8pahxpt8vANRzHv7Tlax7nAD0swdK3iy3VWSSRELnB2DKE1BrMNcBuYpAaEqUnHdD40dOo96Z1TUWPpwgrM0flhfxkmbZShoSY7AbDpY%2FK9bJrP1s6sKSDCMq1dEgfvKXH5ZZt2ggtoKYtw2%2BdtkUV3cEJkcgCo6zqoXD2V5LldU7kGjy0uxdUqD2U9TOd1cGwDSNXF8eUzUuRd5BHhpi6p8XXXyiez%2B5Z6PLhnu5O7aUyonmmTK4rIDUdi7jSZ53bbdvFcGSk0xc7MmEjOGDJZHwfnmFgHrrCKcTxHHOnklH%2BRr8%2BhEuQjYErZnF%2F0usRp1o6jSy%2FJecTy7x3wuNJpWMLkLN6YiGk%2FUV57FQODiDH16vqt%2BPlOFKxsXG9sgCBeoV1GjCmLKP0IDNcCyKWnwUx1XUN89RxPBiAih8hVrA5bXB5QlD1KNMPqgbUgnzIUKLcQvkmLvZDy7s7QZ97M1%2BmUBQ8r1cMLWUvNEGOqUBedGvFow%2BbvphFYQ%2BtEs0M0s%2BqDiigapzJRch3OipyG3BkRAEFc4ZnatKfK%2Bsk07v%2BG0T4AuMcEf6QwJSqNq%2BxHvs%2Fub23OD%2BPwisN7Kfqj0FrYuMqv2ivrXLVlLBME29VOrWkdm6g%2B1w6SyDWRc9lZCie%2BTXxQ%2BRCuqYCjo5oQTNQrSZvU1ZJqX2KE6uODh%2FCchn1gXd8jZCZb%2BPv7DxP0vcWkxU&X-Amz-Signature=598086bf18200481d9574dd3dac6dcb58c05d0356a8e02cc096157e8d932f2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'franchesca',
    nome: 'Franchesca',
    titulo: 'O Descanso',
    tags: ['Morte', 'Passagem de Almas', 'Luto'],
    alinhamento: 'Neutro',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/97d22663-1500-4a98-959f-204d10a9a580/Francesca-imagem.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAN4BEG%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQp%2B7EBw%2BZwIM8a0iFxP1caWAl9DTEoGg2Ct26cDP%2BoAiAXYgErVAlwn3y%2BGZ%2By7coG7MwJ3rtKBZ7SpAbMGd38GCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMJbHuKuzpxtxcN9QMKtwDKah4lsaKkBMgzQlDrUc%2FwbrEoMGKCWvdpx%2FnWdNMQIUbY6g225BZXsd3jw3OzrhMkg%2FHdXggCMJqfGtN4%2BxxXl2armW4hkGHMqPdMP7Otc28%2BYMg9FtNLPljZjQcoD77guyEfiJEIHTR6We0gXDDqz9Xees8Fk%2B8rqiidnZfH60VhmVU3x%2BW6TlYWqrN6jzTjHWsnJN8VDRcFH3HEnoP3vwDWujgs0pqwYlvR%2FAQQBFu%2BZ%2BMARv2k6OYQCx2ZppzmSTMQJjWtdZjP31Q2kchL1lOBGoDhISZ0ZEgnGRN3icwkoYrLUrOTr5SIgWytardtaZQo49q77m77UU8uGcAjP56vF%2F0ocgdLcA6Jh5X5KCE5znk3AyliOsb2xJJvGOBwgXEMJEE3wCRKoL9wP1vPO%2FYeBduNoHGo4GlHnIVzW2gmL1DdsoirjaUxRCOQpuKKzSMW%2Bhf4gua7676OTnBvf7ysTEOMUn43ctkfSQ2iCR9N58%2BeRQ3jQDtZq80duieRA2DNB86iV1MXzhUEAMieMwvEKg04g6Ssuvt9Ed6%2FgOkgKBaqHItMAf70b6vKeOCWwJn2u5rDlY3WQS3mhz1SHn47X5ktVag%2BsHXyp3oXfgjmakiQnz0ywA4%2BxAwgZS80QY6pgFYMBEOrZdgWCUjTqz2tVgbAk2v9ohZLxf5bRuPm8M9avNDUeFFTArvMQcBNsusmQyiaR1R5UXNQDARXbBUkZKiWa3ml%2FINmpQKdfw1MjAR0dXTMJxX7b38Vk1XKd%2BV%2Bl24VIWz3s4Yf6Irzz2wWXOvv6YjWH86C82%2BwAS4Gs%2BlElRODVMzyevvHfhCASxKUOQ%2Fe9CwlKneO%2FkhLTBbW62Q3TOwmQjQ&X-Amz-Signature=b2ab7f280decec8096bb7fa20521929e822f0ad91b8b1f8b101bb94c7170b56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'menestad',
    nome: 'Menestad',
    titulo: 'O Mistério',
    tags: ['Segredos', 'Conhecimento Oculto', 'Exploração'],
    alinhamento: 'Neutro',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/d6da0fc0-13fe-4651-9690-377e731266f0/Menestad-imagem.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3P6SGEC%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeBeA%2BhKzjXEzsd1HvCB%2FP5LqIiNtGXsoZm5HOZl1uDAIgMOxEVqhC1BGe1%2BxtVDWQ1cv2dDk%2FsJb9GyqCHFtqzS4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCdIo%2FdnfpwHjmbuWCrcAzhh2Z5CmxPPCK5U6N7qHtoOtCxkzckg%2F%2BLXGfLkuDzEN9dbuIPF96Z1TH04z72OWd1STs1IHnL3KFntmB0r1Oilq2DpPo4UXIRSakfYV7DEZdVTF4HI1WuTn7X5wVHfXfZtgsV0wiHEsCytAHUeJBvjg5I53Ef3NE5vA52zOzIDWXrl44qvXEVnOknKt%2FFieOMfD4Xz7H2ShcckRdpnrFjmA12mlHfZ4ARNxlGgCfJ2a7BzguyYqhJg9tiaQYM%2FlVlShaWMIaVcamqqYL%2FZtEjkOiYTu5mAK1WLGWzUXrduq1M%2BTXtwwbwk%2FaHbDSY77gdI6DIXod03WZLYM4pDDtGOCiD%2FwzUoSJg2fdeRscKwCuwRUzPltWFre3bzU6xeRBjsYi11kFKifoPDyNr7Y9kdvyW3ZZifn5M11vVYPMXL0cV%2BVbQxokMg12Kaqy%2F0Mo3gQ7c%2BY%2Byrn%2BiPCsvzWXcRceiSmyXZPXkHas3d6hui%2F94UxCQ8NA%2FyBhCJ3yYaoUmy8LQGagnF4sf3ZH8v8tsu9tNEYcvSZjJFxBGrGVNAIAnd9ZXoxdXcNeQkCmX0Fd%2FtMEDoHYBLqqk9N%2BdiOZJ5hHYEqEYITDiDg5SPQS3Kcc89IWqv5YhbNpL0MKaUvNEGOqUBUpgvGHw6w01PKelP6ZwEejQyav9Bq5ePIDoR1xQqFNqeXQO8DS0%2BHxk6XJMTiMGae0gOqQ%2FEEPaGx%2Fi5lP59cxwSxSTkqgw4VWCoy%2B7U6Zp91jSMZOmnymtlwQxpJOTt0XsGNP4epgxVPt8jtEW7piNatqANMxwCV4dJcqLac%2Fo1pu6SS1YySmvI1Dybq%2FN9mg%2F7iK%2BgCXb24DJ8wsb%2B3TuZI13q&X-Amz-Signature=c3d93e04e1daacc619b59377940fedfeb6d2383b42316928d90361bcaf680e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'balthazar',
    nome: 'Balthazar',
    titulo: 'A Caça',
    tags: ['Guerra', 'Fogo Purificador', 'Conflito'],
    alinhamento: 'Caótico e Neutro',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/43c85b08-6c58-41cf-b7d4-651872cdfbda/Baltazar.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCH6Y6D%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM8Ye6A%2BCNUVfqa2w5uF2AH%2FjuexB3kV64qfFAUXDthAiAbmSDrQdLwHRlxmUMciCIMJDexj5bz6ou6sLANpz7YPCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMu4i7gZ%2Bs8GIuV86mKtwDyvTm%2FwUtQ8bg4nPJVvjIgujZnujcNE9B7y5kUcmJeEKv7faRfjdsxz%2FOOH4bhQ83BOR9TMx5W5YIDs4U2NbYnTb%2BjG8roweqsbDczf8alKwpVLHoE9cdyaiz8CmgLBTASRGLibthY8Cl4S8CR0GFOo0yNZhkgf1g6FfYOzzc9318bmRFv7QdELC37U9F5RechFfuscehNPkcJcY6%2BNrCsqGRZia5YVH%2BU1qx3Vu3tdt2Cb7dGokwTR%2BP3fTr7NdpwFQYu6oSEiE3%2BMX73Dh2EE9A2IDtqtv9g5uZ3WrCwlr7Oo6q3096qX%2BuzYTM4mNoHrPvj5OzjVH%2BTvNYZGXWAsi5GfMSIx30a2t9nWgP%2FudkRJaQFDNoRQrXLBXnNNzew5SJ2DIH4WgQveUCeopMM%2FwLzpqQxorY635qeg9DzwENyVZYdvhP8cXEUSz4dr8ezYUdGVqlDFnqiJXXQmtKGyzRI3cmgAKwY86AAG5kSX3kw%2FxxmVb65Fnh1lOr4e5TALGrXWUlXG7W5yvlHOVjkj0%2BI%2FRVDkQl7dhi9ycqZJuYttlw4ywNSH89y%2B4D5nJZQFEhoifQ1VejoL1P3vNY9cscR3xFjWVxjbLCRrrC4yR6CsU0%2FH%2B%2FHYF5NkEwhZS80QY6pgHX3rsy0NY971u2fngK%2Bh0%2BnTQBtVFGITTxWVn0J4Bz5E%2BmJeTyw7SF%2BmHnzxr7f8GeVi1LZOWsanv1M7ImUluIaKXmwCWYSYn43R9MFUFhNxzYtg0bIh7y3q6WbJ70SMweWlpZHDQitqVYg4AHo0eq5VqnXbWr1sgn9BObj3R33F%2ByPyq2cVrIgZHeMcmpfUNmuaBki5KMTqM%2BdYviW5ldEOo3eFPC&X-Amz-Signature=f776fa8c72d4fac6a4e74f814a076933d6dd5048bef6668b40ce6473b520114e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'lyssa',
    nome: 'Lyssa',
    titulo: 'A Musa',
    tags: ['Beleza', 'Ilusão', 'Profundezas'],
    alinhamento: 'Caótico e Neutro',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/02ff4d02-1c00-48f3-ad4f-9e7b9aa134c9/Lyssa.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYZK47V%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnPs%2BP4IyPiAhN%2BNcTidpUNqQilClXkPjAipACxiFgcwIhAN1rQY9eaE83nU86m%2Fzt2Z6srek79Abx6BM63bSA2kInKv8DCE8QABoMNjM3NDIzMTgzODA1IgwaPP5BE5y1%2B7He%2BRQq3AMZ2mZM5TOXGYyZ1oyLZDO2d5XBTlOn%2F%2FK%2FdmW4LpIr1p%2F7xmGnJIFDf9zqkvnycTyHx6mmVT0TfDyYXL%2FYS8l0D8oPi0flH3mXfILanm3ncxkNKKg6DevuQ1P5Zt4tXqJtjv3IcNDYw6RNBHCaiv%2B8pNqap7mqhTazgQfJgObCt0K6se6eWtTu%2FggRPY1hpQ%2BOLQ654UkQpuc9asMt8gdTQ1AAgcpOU0dthgfluPHvEmkCc0MWeRLYhXmk8M4MObH%2FTXn686%2FOFTLBBw%2BQB8Pc%2Fc%2BrO3akv98lX35H6hNukNqv3hJwchQttw4n8sTTjAEnCOGvXTzy%2FPoHMay3Svfv8ganqn2ulL0gQ2oABpj89B3YV70Qm243rPFNVQLdCZQcpS3yYn3BMe%2BncSKYoCUkJFTZexZv%2Btw22LQZY43nviJnM5wJaMOEAHb1mHRq2KBf1BhoMh7Tyj0R%2FqtK51i8cMO6JjPW998MLIevxKLsBUGsv19mIknglOIPf8qabTrKrxK%2BRSF4eYWnJcV%2BOflFVZYvgBdkIP3I5lx9vLXnfYcMFLF90IrlWbTGNBjFnZAH0p9Ex4JtqSkumzYrZSqskJ%2F9%2B578SIerlfep2enc%2BsV47U3vwT4wKuOLLTCywbzRBjqkAQsFDENgnVe9i8Ywh%2BAmE6kisuck0Ay3auXtI0I%2FtO065CjS2O5g33oc%2Bt9Fl4dNHsekY%2FyN19Rj7obM4rW3iyqH7gbsejcmhB5HtXtOcyhJ%2BSXyS0D76UVioZm%2BtB5p83DT4vc29Ksi9G6BsiKibbaZXyjVyF2AAddj9SDx9XByXX5mv3vc7dOj2x5KGOnjKuFFsj%2B1oWWEpmeqQdjlDzVVaeOu&X-Amz-Signature=42fa4f0729d45e6980f3fec0091e4be9c7ac9458fd579a18697f93563e53005f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'koda',
    nome: 'Koda',
    titulo: 'O Início',
    tags: ['Equilíbrio', 'Origens', 'Vigilância'],
    alinhamento: 'Leal e Neutro',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/078c5fd5-46e1-4c81-a5f6-61e56a67c36e/Kodaa.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NOHNJRC%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYd%2Bp8vpkkyTYaZyE9VT6KQBVHv47nzhWzI9%2BGtiWOTAiEAqHkGKSMNX5VC%2FD8qRsRrL4VJVlKWc2vencmSAuEgR7Uq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNrCjlaB3oC7uU8sjSrcA2DrKtxIEQrmb4MiSeQElcWnq8fJ3ND5jyBARt42QmPjP5IL%2FwhKvRclmuggK5tNkZo2XNKm3DgHvluZBBoD4OuhAl7v9RkJHIAawg6chTfoHmp13vl0b0EQoF7YTM8GpcjXdt9Fv6rPI%2FsilRwOM0S45MBhnpvGAaNo1ZlB%2FevL7f4rSacNq5XJTdTrKcWgUDjyMbwi6pdpdRyZYHwU60JguSoUY3MLatrBAs3u%2FgWy3kgPNpav4p4R6BVbm%2BnYX7kNCm0ZQ%2Fksxqu7iP7qV1292F%2Fhq%2BrFP5fouSYsD524%2B1zGjDVyBaLaM3%2Buh7%2B%2Fs2Ys7kQQqapouhssBnt%2FPR9E2bfTF%2FVAxuzWvh%2F2wDK%2BAWbAjorBCe3iBGhwAnGIld4tc8%2BV81LMNUWYKoknQQVEls1x%2BGIB33yKGKRVRml2fqO7yCiNSjKH0FXF7aTSITWRgunv108I3jfxEHHRA3xbbo6UzBIaZQG9rPZz%2Fs7CcN9rISFy90%2BjqSpUkbQC%2BQdvTFsurBeoswCmnnitOLo8MgkEYlvX4P%2Bl1zz2stZSvUekE%2FpgiPcxrxaZY01CnCaqV0iSLAxvNEIzBZlhgDeTRdPEOAA%2FJny%2BYW09qA3CpBWnJAf15PL1JIhGMP%2BTvNEGOqUBBefcauD9Indib6PDvaODprortKtEE%2BWm%2F5ynGhW6a1U4dYtU7hmbTqobCoNeuy1YPXkaU8SjcL6TelSBib%2B%2BQ9NECYkiwo4uQtgpT61W%2B8nIy5q9kUdTyIWPZPF%2Fb2H0AOofpayT%2F7SR9UqaO0DXTPgziJXKQXZTCInGYwO4hiQTWNFkn16%2FmNhkaASTuwMAekwikUscnJ9VpMaAKEJAR%2FC1i%2Fg3&X-Amz-Signature=302186de8937e0516083e9b7643fe796ed0307a1aa216a96dba44d14b548b01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'dwayna',
    nome: 'Dwayna',
    titulo: 'A Alvorada',
    tags: ['Cura Ativa', 'Iluminação', 'Proteção'],
    alinhamento: 'Neutro e Bom',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/e3e00271-98b9-4d6a-9766-4ea23544fcd2/Dwayna.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PZLBN73%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMxiUAdl%2B2lJx4%2F%2FCOiD7xf9F85AcKH6SwHg94bIkSjAiEAiOUZ84J29%2F3NfpqLCWE3cnFyGliYIBRryQZwg1OYxAAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDA8mUgR6znamBq9nNyrcA9lh5ZtR6LrSYTXaZW7WDcLWD5RaUSeQN2UiVOolUHIk1ER%2F3%2BZXiJwrToI2Kmubd48QiNkM2Dgtq%2FH8YArAO0eZeI9GgAoiG7iavdGDIkhq2gy15KoC2a7YusQt5VpxZGT3qS3LqoWNFNfWKkA9Bex7DMkr%2BMrO%2BWxDcBB9gjf99HtTHj%2BO%2BnAIUC78Eu%2B64CnvTnKM8MXLSpXjA9qKkAvCkx3YbEGY8wss4b0enyqeWZKxIa%2F4XMq6dShbluFNC76o%2Bxa63cgnKTdIowSbCcNnPQaHQguK1rPKvCF0oauT8qJHR26DyPicdSkkoDbYd20PeiUg%2F1H3MTkN0T0%2BgqrB02AMnqmGFBMp11%2ByAk%2FCXfIlCUwutDzt7TsY2Qalk2YbhuaQn8UtcCaxVIW%2BbYBIZ4M43MsyEwd8SzJMMLKihDsBKsBlEJGiCY2IOSY6eoq%2Br0PzjhS7hA9KZ5roZRSjw11FFEKX5Va3kpw%2BFAsgnQJ0uc5nxLh%2BEkcrvcXZY9A2Hc%2BPNkMro0hsrRM2wnHI4iVgBy%2FBVBsdYNksYwG526FM9IHhythUuyiaOGzpYW4fXmED8%2FHuwh0C3RjVi5XztpAh90iKaQwmn05Tn%2FgxWl%2FSta1dGyWyrWMHMLaUvNEGOqUBGXrPHDQ3APG%2Bw8pHKVpBTew5LNz%2Feh2KYXvA%2FIu%2B0OGqQqBiIlFQHJGvqqe%2FtD76G4TKI1HVwFzvCYycLoQMHBoVnsCNMv3CcwXzue0USIon%2FBhXeMGYYdvVhJzT%2BL3vBz2aAeb%2Fms4b9ysxktH%2BRm8gDJaUWPHvIHg%2B07u2sjdrVgp66yzMa4nfCIPgE7TFCIvKxIWSh9FSO3LGeChpPgyet8Cc&X-Amz-Signature=202825c7700f2b1b6b5b056e077264e2570e09388720000574e56efc63f9e6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'kormyr',
    nome: 'Kormyr',
    titulo: 'A Harmonia',
    tags: ['Justiça', 'Leis Civis', 'Autoridade'],
    alinhamento: 'Leal e Neutro',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/152bab18-ea8f-4b3f-a1aa-457324745d4e/Kormyr.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XOQAD4P%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX6URjl8yz9X2bPWsWdkDo2b%2BJq%2BwI%2FqoCZnVkkQNWWAiBB3%2BFz0pN3Vkh0pNQXKXgq%2B7xM3YWYo8tX5j2D8l%2Ftgyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIML3yagmhkdRoMdNI7KtwDguTgJAhRUdSD1KCJjEwc3kuwYXtHCcHwZlJEKe4Q95h9YMz1bdWGe%2BbWRiojrQnBzy3%2FkTAQndv4LSSZzZxaerT9gwDt4bFTArh8XiJQqoAlimRFaQc9gTOchMbnO8LiVj4vQNzxhn91xhckKgRFC%2BSxiL2TFJHE4kh4%2BjWQudRacBllAhAw2nl2T9yzhl4SdweOHi8vkw3kEnAnafp0IeuDaVNKmhjzhMhIrth7JMSQDHILJKS9JfdddF0lup1udtLVrHE%2F1JUxmif46kOm6BYjG4fNUbJiFrGqN1INhzxKUJ%2BgFCOCyqdExVN6ZNt%2B%2BBERhWbb0ZQGmNRo%2Byi%2BFsmURw%2F1AGRODidlGmIDHt%2B%2FpDglw7ZBL8K%2FwP55Ix%2Fi0m0kqZF%2FFe89nXZq9znitntZOejwBJfBHGVh3LJgvOiq857XYxj9NZ7EJKydEp7KzQ5QUwwlF2JJWTgBM%2ByTf1fStBuwJZh059NL8gpnDehsytiSzUY2msCY3Mmr2LXVqXbcLOnjNYWHK5shaUAqrH856mtZUJkNxP1%2FGfEad%2F0%2Fie3il3UlfPwMcxKDvpMorBdE6%2FgFbOQgnTSkUswaVVahsYC8un485WV%2Bg3WGFjv6bk5Uz%2ByVSL0tiSAwgpS80QY6pgHK8rGroJa7nyt8U9iczmM6ODMuvcw2FAN5x3vyhJKJsw2LXgjXyeERQSp8CEHgBd3Y3q1p%2BQoz4%2FAyaKrvlrwDrnGPiDCxXkjD1I1mcCC0PZByx6gdUeGLwXSkxTcOP1CcoFqLm8QRoUWbQjj2DiE%2FpvSkfJYZ1vB4JRIOdL2UNgZhGik2zArj7EDMfr15N%2FLrEkTVrTGyziIboXqelN8v2Ty8TUjf&X-Amz-Signature=40c634ca74ca446bfc24fff9dfab7913392a83b70ccbdc4d6ebaa32c8531ae60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'nana',
    nome: 'Nana',
    titulo: 'A Inocência',
    tags: ['Proteção Infantil', 'Barreiras', 'Punição'],
    alinhamento: 'Neutro',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/a78993b8-0609-4c40-9657-eb8a513def2a/nana_Arte.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSHTVGO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHszFWKU3mBfSGhgLmBJ359ttGqtLVvWpPw3eu9XwEb5AiEA2964hvTLzEPZ1AW%2BHjuSH6cu9iiXeZhB%2BrohO0rh%2ByUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAQQOxkg2je2eE9nJyrcAxfOK8nLkk%2BR9A%2Bi%2FeTzifpI2HSz4gv52Tuo730EYmZOU8gWn9OeTv%2BLdy3GR5AyNkziKJqMJ6Em3VJSFTiFlHOrEa9nsyAXM4z8VnWJAu4UJrq2eEYdMkouH2g72PzF24kOrLQV2G50J%2FWP0tZhLOxKsPfMR5LRvknVUbH2LvII8roVooi%2Bb7xQzOsdT8PbRUz5qYPD95VD9JMQSigAcDE55Vp5xDCJu8thWOLs98RPQoemb3qCb2BcFjEDEGFC7k6Rwmu2lBfRUsvpPZzQWpzGHQdv0aeg4Zqoph1wvN8q3TzogwmgqKWjLykErck1dz%2Fx2WKKpbnzTHvs46XCYxhJwTNbEdZCcrLFub1vv%2BI6GdJ3%2B1n3Vv8EUTqxj%2BRu2VCylOZqzmd1W4e7QUAtwEB9DHHiRop8u9CsJ9dfIRwPYEWpKB2oCrN%2B%2BaNdW7zhD7aRTSlBYDTTAni7xk0RRBNGNy9nrh7LweuYqH%2FS0MYQDuFpIPp76lmKu2AZeAvhslnsk8x7h1u8xlCOgaMiJCDbUhG1uqb6Md%2FUp25Z6d1zSAVcdvuXpx8siq3mbAUa86u44JewfLpeu%2B%2Bf9oxRFSnq8U4KJrehsxy9%2FJkYCrog%2FMSoavSf9v7jOylKMICUvNEGOqUBpVbrc5bb41hz4FWVBlkTFhmtbOYE%2BPcoxTUihgPcGb4%2FGYGeL3C4uRKmMnTFxGmH5k0ztqbS09sNIQVJevPalGyPpWtc2BoMcKcCQ9i8k2%2BKX8Xy%2B8UQ%2Bskt3eF82DJ%2FC4Ic6ZBL05fyJkg9Lr673E54zX3lH3xNAkyR3MR8N9Hy7ExU80kYf3RZYytoEGG2V%2FkvFhY%2BXUu307TD0NuBBvleUHGJ&X-Amz-Signature=ec6be6d9bc5a7af0795dd1f9ae681d4ff32fe05aa2f820aa9a392793e152a35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'melandru',
    nome: 'Melandru',
    titulo: 'A Fertilidade',
    tags: ['Natureza', 'Terra', 'Preservação'],
    alinhamento: 'Neutro e Bom',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/8b5f8593-5142-4fa0-b0ed-265fc1c4f5cf/Melandru.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3VRFQS%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEK%2FZNeBdr%2BI2nv2ZImylWW8kj15GI89By1f2%2FDIM11NAiAyFiO11CWu%2Fy4soK8vGNqeheNOCDEZhvU3aUEjebhZcSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIM5dn12mvKTKJNFkAEKtwDDjIlpgmMGgbp9rKUERT5Uo8yTimOuzSSmMeKX6XybDI2usbTpC0vF%2Fdn8KCtYU7NPF9%2BHIcyu5RoAR%2Btpd%2B3V6%2FXWDMDitQLjvS3tODRvDYiNjzc2kmXcTyeCZe00n3DTeL2nBNgDP7wMbm2SJLnSPM6nIzutVXeLfRiJGuwGLOaYKj7gQYXZuQdVrhb4iOsl7mGxbgGpOVgtYXD7K9%2BGIoWzL4rWArlAva5ps%2Bp1PhnNPh3B%2BJgJIUOO5rhE0as%2F4yuHp5bRn5R6ccLTfMli83YCf4ntDsQEiXkUCaMz7LGNh8vtkF0L6sU10Dmo67vgQqITW8DFDdY2T4B3u30mW3rTa9n9Ety56ZmDsfwa5jLOyyfMjKcWi%2FcOP18rDj%2BMWFptz5jOBT13SDKyMLKnZA72wCFqWZwf6rnGw86KXCwYWpfQcwcq6Oxeo%2Fs3Dg%2FfdDb8Gbbf%2FXcHZh6e6ufrX4im%2Bfy9%2BMaWUt4g6TIDg1aO%2BmfP6hkaUWdnxjocnz27Zkh4VEzaSnpa5ntkH5%2FDqqcfDaMJv994wY5gbh8JnFkYadB21ixXK6FB2vADVeS8MS2qJssAThWYGHRBwx0kIf1FOxz%2F5pBhhcUJOMA84fRZ3scKKu94rUGv9kwgpS80QY6pgHgMhKXVIK4TN0wHORnZ%2BnGlvJla%2FYc1cxXkWy8xUyurZ66%2FQrwJHxNrb%2B5nUTb35C0uo4763MFuvcsMCZyxuSmM4L8PAdLeezSH%2F4xyLuKKli%2Fhj%2Fh2wbdlJMxXMreik6NOmFNd%2FK6nrBb%2FwtIhq6uN%2FqDoSwbzm9vNkMfCs69n%2Fi6Hsx%2BWOA7pM1v9PWwS4HYRXnluJEBRixMHTiZwQ91H2mwMZHx&X-Amz-Signature=c2490aad384ae2529a4e7b3e345d6cad62571afbf70fc0b4efe81bacf5a9ab79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'grenth',
    nome: 'Grenth',
    titulo: 'A Melancolia',
    tags: ['Morte', 'Necromancia', 'Gelo'],
    alinhamento: 'Leal e Mau',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/e7092fd8-dc64-4956-bf43-191060041836/Grenth.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TXHOVIT%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1lTERd%2F5m4eQ%2FBO5Pvwk9Ulu3QkOtYsY%2BqQ%2BETH%2BFKgIhALR7jt4GABOnOdz5L0p2dzGoG4ipEZhDHbzgKl2w2OeXKv8DCE0QABoMNjM3NDIzMTgzODA1IgxJi9Ma8IoXqgBB%2FNEq3AP%2FOibRbV5MbzLFwXLGyknl%2BxgpvrMSvleQw84z%2BnpGS16dce6BNJEp3G8bhkII6xeEtqhPnAXUCj3SuMcfZR0AyLH9fRjCcQmVIFCG9ExaBfjo1D%2BbJXH9n2G27waSLY5FKbduS2F58yjCdNdkShHky4D44eyJP7831swHEztiUgbVsjO%2FMQmvaMHXw54y51OGwCHXZhryiuRecUih6lGMODBqLB%2BypTLjiNbjGqIgliDVTVlGYM0JlHVL4DcIyeUHXVya0q7o%2FiDJEo3b1tYzH%2BV5zP0Q63%2BfoWU7Evv6kvEW%2FCbltCjeE4VM6cUEw6Kr4rOyJ7v%2F9L5c0fTr8Z9vlia8dG2ewtDtNjQEVmiQrRU7%2BeyPXeNnsFcx%2F5vlmlvJUtOMl1Jl8sZ8kQdT7tPA9SwzAYsNLR5Xa%2FJSE06HYO1wHvQNqrDnnj0F3aXpaUu0mldroxzRBthipyxwVzskYbWNjmHViOmPiamYgYLMtSstuK9hbdptoJZ0qqC7Tn6p2wQc7ielVaQM%2Fg%2FtO72rVs37kP%2BY1KDBgw37%2BYBQzVnuCf1IEHj4yK%2FZ4ErERP3JxLAtCEBAP9MygxfktTuLOZRtkGm4DPBT0YDpZHH2tW5AFPwKNahD9d4bDjDelLzRBjqkAY2rhrOhlOv7vXEBlxnx%2BcCv1EllWKXZNoyUlUoXymGdPXiy8wBOYg0bcnkAh8aNB%2Bc%2FB2qXaps2lrsrIDyZYAtwXx0GlENZl06qO9wfxjDEs3aSUpfN9iLuK9FTjXykh2YUYtxXFcmwCRKfyV4Z2QFkmMRZlFx42UX%2BN3qZdcJaVoiV7%2B8TwaxYebjCe7c%2FXCX7Oj4RNa3cNgAIk%2Fea1fYa4cNI&X-Amz-Signature=6dd7ecbeed89f1cb416b8835f87339124ebc553ecc59e08851d2087021b34bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
  {
    slug: 'irori',
    nome: 'Irori',
    titulo: 'A Perfeição',
    tags: ['Sabedoria', 'Autodisciplina', 'Iluminação'],
    alinhamento: 'Leal e Bom',
    img: null,
  },
  {
    slug: 'caligura',
    nome: 'Calígura',
    titulo: 'A Depravação',
    tags: ['Crueldade', 'Sacrifício', 'Ambição'],
    alinhamento: 'Caótico e Mau',
    img: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/d53b9f9a-2ccf-81d1-96f8-000386999fa0/7950ba87-96d0-4fdc-9adf-d7aafbca544f/Calguraa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T24EIHMX%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu9XDuK5185p9LAVHBfH%2F%2BFt4QGcpH4z%2F%2BE%2Fvee47gIwIhAIMw8oE1xrH%2F0Vvck1BCHRjTZZIuZHsFMy%2Fo6NLmAhloKv8DCE0QABoMNjM3NDIzMTgzODA1IgzJf0oeufFe82KTMloq3AMcOj5pAm3pAzxAR0ZTpYctoe36WaMWDqZgdhVW8tv%2BUowUoLO3SfYMPrvmdje7gmLEkwJK8le%2Frx87jkVYlNJqxDZT4NoSIIpDdzDEc70vGm%2FHpDz9ydobZsEYFUZw0AA%2BKa2oMkMywcPyNmHdrDpbx9zagd9WYBP3tC39uVut6gDZYZciAjZsxZz%2BvunPmItuMaPqXlsnt6K93KSXFBQScCu3IzNVv8h4DLCe2MtmMuI%2FezHA5e9GaQQV%2BawGGaXucwwAWXIaOKFrJJgeT%2FjzG3NlNBsWq%2FBUehEXYSYalr%2B0jSIzlgOx82tp53jN1kI9rSYmR3MVKsCtXviDayAyt%2FKIQ1aeXuEu1%2BVjGYrceWo0ZCW69O9WmzSaEchod3uPZrakDcvArmM4lihWL53NUtdKtBrRfiCgfdpvumCt0Nt4%2BYy%2FGwL%2BU78YX4T%2BlphW%2FFfbxMTXysFbdSRva0G%2BMZC4al8t8vGG5fyS4eljbS%2FUU0kdqCKzni01YaVCX%2BX1tswFvhGLfHSZ33UWwtDK225KmGmFLqzv%2B6LDEeuZ9Y24zCCXavdwdpeExmqBgZ5wFMG2g%2Bcnbe0KkOo9wiqv11HSteXp4TabHrFQpBBb4PH%2B5JHDSmIYY4qGQTCClLzRBjqkASy3SBtifPb1WmDNPxYYNo5C4S6AHTmVFXbLxK3bNV2Us%2BLjaHEA%2BDXLfunCeW616aauPlJT3XXeHZQlUtJgkkc6KlPghWNQiT8ikePUkesgYaa2P8pH6tT9WWAQNQRhTWqp809zarQagz9jjcesAvlgk4OohMaRwn8p29aWLNEyBC8pPGTqYKg5RxOdjeR0kKAivNabeahzMtktqPAF36%2F%2Bi2%2Bv&X-Amz-Signature=26ff6e298377c204de2844155ffdb3d2102b2eca3752829be1325a73c90d36da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
  },
];

export default function Divindades({ setPaginaAtual }) {
  return (
    <main className="pagina-site pagina-conteudo">
      <h1>Divindades de Tyria</h1>
      <p>
        Tyria é um mundo onde os deuses deixaram pegadas visíveis na história e no cotidiano dos povos.
        Cada divindade carrega um portfólio de domínios que moldou civilizações, guerras e filosofias ao
        longo dos séculos. Selecione uma divindade para conhecer seu dogma e sua influência no mundo.
      </p>

      <div className="grade-divindades">
        {DIVINDADES.map(d => (
          <div
            key={d.slug}
            className="card-divindade"
            onClick={() => setPaginaAtual(`divindade-${d.slug}`)}
          >
            <div className="card-divindade-img-wrap">
              <div
                className="card-divindade-img"
                style={d.img ? { backgroundImage: `url(${d.img})` } : undefined}
              />
            </div>
            <div className="card-divindade-info">
              <p className="card-divindade-subtitulo">{d.titulo}</p>
              <h2 className="card-divindade-nome">{d.nome}</h2>
              <div className="card-divindade-tags">
                {d.tags.map(t => (
                  <span key={t} className="card-divindade-tag">{t}</span>
                ))}
                <span className="card-divindade-tag card-divindade-tag--alinhamento">{d.alinhamento}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
