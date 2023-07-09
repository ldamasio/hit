from django.http import JsonResponse

def Test(request):
    return JsonResponse({'a': 'b'})