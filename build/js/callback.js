$(document).on("submit",".callback_form",function(){var n={};return n.name=$("input[name='name']").val(),n.email=$("input[name='email']").val(),n.tel=$("input[name='tel']").val(),$.post("/build/sendmail.php",n,function(){$(".form-result").show(),$("#hidden").hide()}),!1});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxiYWNrLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiZGF0YSIsInZhbCIsInBvc3QiLCJzaG93IiwiaGlkZSJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLEdBQUcsU0FBUyxpQkFBaUIsV0FDdEMsSUFBSUMsS0FRSixPQVBBQSxFQUFXLEtBQUlILEVBQUUsc0JBQXNCSSxNQUN2Q0QsRUFBWSxNQUFJSCxFQUFFLHVCQUF1QkksTUFDekNELEVBQVUsSUFBSUgsRUFBRSxxQkFBcUJJLE1BQ3JDSixFQUFFSyxLQUFLLHNCQUFzQkYsRUFBSyxXQUM5QkgsRUFBRSxnQkFBZ0JNLE9BQ2xCTixFQUFFLFdBQVdPLFVBRVYiLCJmaWxlIjoiY2FsbGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5vbihcInN1Ym1pdFwiLFwiLmNhbGxiYWNrX2Zvcm1cIixmdW5jdGlvbiAoKSB7XHJcbiAgIHZhciBkYXRhID0ge307XHJcbiAgIGRhdGFbJ25hbWUnXSA9ICQoXCJpbnB1dFtuYW1lPSduYW1lJ11cIikudmFsKCk7XHJcbiAgIGRhdGFbJ2VtYWlsJ10gPSAkKFwiaW5wdXRbbmFtZT0nZW1haWwnXVwiKS52YWwoKTtcclxuICAgZGF0YVsndGVsJ10gPSAkKFwiaW5wdXRbbmFtZT0ndGVsJ11cIikudmFsKCk7XHJcbiAgICQucG9zdChcIi9idWlsZC9zZW5kbWFpbC5waHBcIixkYXRhLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAkKFwiLmZvcm0tcmVzdWx0XCIpLnNob3coKTtcclxuICAgICAgICQoXCIjaGlkZGVuXCIpLmhpZGUoKTtcclxuICAgfSk7XHJcbiAgIHJldHVybiBmYWxzZTtcclxufSk7Il19
